import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HomeCards from "./components/HomeCards";
import JobListing from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeCards />
      <JobListing />
      <ViewAllJobs />
    </>
  );
}
