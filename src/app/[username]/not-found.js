import StatusCard from "@/components/StatusCard";

export default async function NotFound() {
  return (
    <StatusCard title='No results found!'>
      We couldn’t find any GitHub users matching your search. Please
      double-check the username and try again.
    </StatusCard>
  );
}
