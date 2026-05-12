"""
HAPI FHIR server client.
"""

import httpx
import structlog
from app.core.config import settings

logger = structlog.get_logger(__name__)


class HapiFHIRClient:

    def __init__(self):
        self._client = httpx.AsyncClient(
            base_url=settings.HAPI_FHIR_URL,
            headers={
                "Content-Type": "application/fhir+json",
                "Accept": "application/fhir+json",
            },
            timeout=30.0,
        )

    async def create_resource(self, resource_type: str, resource: dict) -> dict:
        response = await self._client.post(f"/{resource_type}", json=resource)
        response.raise_for_status()
        result = response.json()
        logger.info("FHIR resource created", resource_type=resource_type, server_id=result.get("id"))
        return result

    async def submit_bundle(self, bundle: dict) -> dict:
        response = await self._client.post("/", json=bundle)
        if response.status_code >= 400:
            logger.error("FHIR bundle rejected", status=response.status_code, body=response.text[:2000])
            response.raise_for_status()
        result = response.json()
        logger.info("FHIR bundle submitted", bundle_type=bundle.get("type"), entry_count=len(bundle.get("entry", [])))
        return result

    async def close(self):
        await self._client.aclose()


hapi_fhir_client = HapiFHIRClient()