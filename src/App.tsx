import Link from "./components/Link";
import { Separator, SeparatorInline } from "./components/Separators";

function App() {
  return (
    <div className="my-3">
      <header className="mx-5 text-center">
        <h1>
          Tran Minh <strong>Khoa</strong>
        </h1>
        <div>
          <Link href="mailto:t.m.khoa.2308@gmail.com">t.m.khoa.2308@gmail.com</Link>
          <SeparatorInline className="fw-bold">|</SeparatorInline>
          <Link href="tel:+6580138550">+65 8013 8550</Link>
        </div>
        <div>
          <Link href="mailto:2101432i@student.tp.edu.sg">2101432i@student.tp.edu.sg</Link>
        </div>
      </header>
      <Separator />
    </div>
  );
}

export default App;
