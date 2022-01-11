import Header from "../../components/header";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header pageTitle={`Detail Showcase ${id}`} />
      <button onClick={() => router.back()}>back</button>
      <div className="text-3xl font-semibold capitalize">{id} Showcase</div>
    </>
  );
}
