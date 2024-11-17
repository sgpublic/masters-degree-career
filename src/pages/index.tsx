import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import {useEffect} from "react";
import {useHistory, useLocation} from "@docusaurus/router";

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const history = useHistory()

  useEffect(() => {
    history.replace("home")
  }, [])

  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />" />
  );
}
