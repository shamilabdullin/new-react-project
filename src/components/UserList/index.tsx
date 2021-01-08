import React from "react";
import { UserGrid } from "./styles";
import UserListItem from "../UserListItem";
import { useQuery } from "@apollo/react-hooks";
import { IUser } from "../../types";
import Button from "../Button";
import { SEARCH_USER } from "../../Queries";

interface IEdge {
  cursor: string;
  user: IUser;
}

interface ISearchUserResult {
  search: {
    edges: IEdge[];
  };
}

interface IProps {
  searchTerm: string;
}

const UserList = ({ searchTerm }: IProps) => {
  const { data, loading, error, fetchMore } = useQuery<ISearchUserResult>(
    SEARCH_USER,
    {
      variables: { queryString: searchTerm }
    }
  );

  const handleLoadMore = (edges: IEdge[]) => {
    const { cursor } = edges[edges.length - 1];

    fetchMore({
      variables: { cursor },
      updateQuery: (previousResult: any, { fetchMoreResult }: any) => {
        return {
          ...previousResult,
          search: {
            __typename: previousResult.search.__typename,
            edges: [
              ...previousResult.search.edges,
              ...fetchMoreResult.search.edges
            ]
          }
        };
      }
    });
  };

  if (loading) return <p>Loading..</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <UserGrid>
        {data &&
          data.search.edges.map(({ user }) => {
            return <UserListItem key={user.id} user={user} />;
          })}
      </UserGrid>
      {data && data.search.edges.length > 0 && (
        <Button onClick={() => handleLoadMore(data.search.edges)}>
          load more
        </Button>
      )}
    </>
  );
};

export default UserList;
