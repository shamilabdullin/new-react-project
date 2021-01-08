import React from "react";
import Container from "../../components/Container";
import { useQuery } from "@apollo/react-hooks";
import { LOGGED_IN_USER } from "../../Queries";
import StatusForm from "../../components/StatusForm";
import UserProfileCard from "../../components/UserProfileCard";

interface IGetUserResponse {
  viewer: {
    id: string;
    login: string;
    name: string;
    location: string;
    avatarUrl: string;
    bio: string;
    websiteUrl: string;
    status: {
      id: string;
      message: string;
      emoji: string;
    };
    starredRepositories: {
      edges: {
        node: {
          id: string;
          name: string;
        };
      };
    };
  };
}

const Account = () => {
  const { data, loading, error } = useQuery<IGetUserResponse>(LOGGED_IN_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <Container>
      <UserProfileCard user={data!.viewer} />
      <StatusForm />
    </Container>
  );
};

export default Account;
