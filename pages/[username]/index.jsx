import Header from "../../components/header";
import { useRouter } from "next/router";

export default function Username() {
  const router = useRouter();
  const { username } = router.query;
  return (
    <>
      <Header pageTitle={username} />
      <div className="text-3xl font-semibold capitalize">{username} Page</div>
    </>
  );
}
