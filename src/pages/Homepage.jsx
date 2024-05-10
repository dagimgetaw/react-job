import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListing from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

export default function Homepage() {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListing isHome={true} />
      <ViewAllJobs />
    </>
  );
}
