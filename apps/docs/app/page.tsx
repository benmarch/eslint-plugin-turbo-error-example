import { Button, Header } from "ui";

export default function Page() {
  return (
    <>
      <Header text="Docs" />
      <Button />
      <span>Hello, {process.env.userName}</span>
    </>
  );
}
