import { Loader2Icon } from "lucide-react";

function Loading() {
  return (
    <div className="flex-center min-h-96 h-full w-full">
      <Loader2Icon className="animation-spin size-8 text-green-950" />
    </div>
  );
}

export default Loading;
