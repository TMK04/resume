import "./App.css";
import Link from "./components/Link";
import { Separator, SeparatorInline } from "./components/Separators";

function App() {
  return (
    <>
      <header className="mx-auto w-25">
        <h1 className="text-center">
          Tran Minh <strong>Khoa</strong>
        </h1>
        <div className="text-center">
          <Link href="mailto:t.m.khoa.2308@gmail.com">t.m.khoa.2308@gmail.com</Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link href="tel:+6580138550">+65 8013 8550</Link>
        </div>
        <div className="text-center">
          <Link href="mailto:2101432i@student.tp.edu.sg">2101432i@student.tp.edu.sg</Link>
        </div>
      </header>
      <Separator />
    </>
  );
}

export default App;
