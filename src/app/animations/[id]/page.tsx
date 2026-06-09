import { animationRegistry } from "@/data/registry";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const animation = animationRegistry[id];

  if (!animation) notFound();

  const SceneComponent = dynamic(
    () => import(`@/components/animations/${id}/index`),
  );

  return <SceneComponent />;
};

export default page;
