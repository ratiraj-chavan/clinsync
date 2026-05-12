import { Clock, User } from 'lucide-react';

interface TranscriptEntry {
  speaker: string;
  text: string;
  timestamp: number;
}

interface TranscriptViewerProps {
  transcript?: TranscriptEntry[];
}

export default function TranscriptViewer({ transcript = [] }: TranscriptViewerProps) {
  const formatTimestamp = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
   <></>
  );
}
