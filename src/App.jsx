import { Client } from "@gradio/client";
import { useState } from "react";

export default function App() {
  const [answer, setAnswer] = useState("");

  const askAI = async () => {
    try {
      const client = await Client.connect("http://localhost:7860");

      const result = await client.predict("/predict", {
        message: "Hello"
      });

      console.log(result);
      setAnswer(result.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={askAI}>Ask</button>
      <p>{answer}</p>
    </>
  );
}