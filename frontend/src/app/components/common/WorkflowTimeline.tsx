import { Mic, FileText, Brain, Code, Database, UserCheck, Send, Check } from 'lucide-react';

export default function WorkflowTimeline({ currentStep = 1 }: { currentStep?: number }) {
  const steps = [
    { icon: Mic, label: 'Audio Capture', step: 1 },
    { icon: FileText, label: 'Transcription', step: 2 },
    { icon: Brain, label: 'Entity Extraction', step: 3 },
    { icon: Code, label: 'Medical Coding', step: 4 },
    { icon: Database, label: 'FHIR Generation', step: 5 },
    { icon: UserCheck, label: 'Doctor Approval', step: 6 },
    { icon: Send, label: 'FHIR Submission', step: 7 },
  ];

  return (
    <div >
    </div>
  );
}
