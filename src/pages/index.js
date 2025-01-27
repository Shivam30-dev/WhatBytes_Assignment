import React, { useState } from "react";
import Layout from "../components/Layout";
import Modal from "../components/Modal";
import PageContainer from "@/components/PageContainer";
import Header from "@/components/Header";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rank, setRank] = useState("1");
  const [percentile, setPercentile] = useState("30");
  const [correctAns, setCorrectAns] = useState("10");

  return (
    <Layout>
      <PageContainer
        setIsModalOpen={setIsModalOpen}
        rank={rank}
        percentile={percentile}
        correctAns={correctAns}
      />
      <Modal
        setIsModalOpen={setIsModalOpen}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        setCorrectAns={setCorrectAns}
        setPercentile={setPercentile}
        setRank={setRank}
        rank={rank}
        percentile={percentile}
        correctAns={correctAns}
      />
    </Layout>
  );
}
