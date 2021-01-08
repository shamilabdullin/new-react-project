import React from "react";
import { StyledRepoItem, Description, Details } from "./styles";
import { IRepository } from "../../types";
import { GoStar, GoRepoForked } from "react-icons/go";
import { theme } from "../../config/theme";
import { format } from "date-fns";
import Heading from "../Heading";

interface IProps {
  repository: IRepository;
}

const RepoListItem = ({ repository }: IProps) => {
  return (
    <StyledRepoItem>
      <Heading as={"h3"}>{repository.name}</Heading>
      <Description>{repository.description}</Description>
      <Details color={repository.primaryLanguage.color}>
        <li>
          <span />
          {repository.primaryLanguage.name}
        </li>
        <li>
          <GoRepoForked color={theme.colors.primary} />
          {repository.forks.totalCount}
        </li>
        <li>
          <GoStar color={theme.colors.primary} />
          {repository.stargazers.totalCount}
        </li>
        <li>{repository.licenseInfo && repository.licenseInfo.spdxId}</li>
        <li>{format(new Date(repository.updatedAt), "dd-MM-yyyy")}</li>
      </Details>
    </StyledRepoItem>
  );
};

export default RepoListItem;
