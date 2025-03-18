import { useEffect } from "react";
import { useRecoilSnapshot } from "recoil";

export default function DebugObserver() {
    const snapshot = useRecoilSnapshot();
    useEffect(() => {
      console.debug('The following atoms were modified:');
      const modifiedNodes = Array.from(snapshot.getNodes_UNSTABLE({ isModified: true }));
      for (const node of modifiedNodes) {
        console.debug(node.key, snapshot.getLoadable(node));
      }
    }, [snapshot]);
  
    return null;
  }