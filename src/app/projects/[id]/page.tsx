import ProjectView from "@/components/projectView";
export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  return <ProjectView params={resolvedParams} />;
}
