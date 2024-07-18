import { useState, useEffect } from "react";

export function UnmountComp() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    console.log("컴포넌트 마운팅");
    return () => {
      console.log("컴포넌트 언마운팅");
    };
  }, []);

  const DoUnMounting = () => {
    setMounted(false);
  };

  if (!mounted)
    return (
      <div>
        <button onClick={DoUnMounting}>Unmount</button>
      </div>
    );
}
