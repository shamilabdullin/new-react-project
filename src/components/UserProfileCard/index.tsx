import React from "react";
import { StyledCard, UserInfo, Img } from "./styles";
import Heading from "../Heading";
import { IUser } from "../../types";

interface IProps {
  user: IUser;
}

const UserProfileCard = ({ user }: IProps) => {
  return (
    <StyledCard>
      <Img>
        <img src={user.avatarUrl} alt={user.name} />
      </Img>

      <UserInfo>
        <Heading as={"h1"} size={"1.5rem"}>
          {user.name}
        </Heading>
        <ul>
          <li>{user.location}</li>
          <li>{user.bio}</li>
          <li>{user.websiteUrl}</li>
          <li>Status: {user.status?.message}</li>
        </ul>
      </UserInfo>
    </StyledCard>
  );
};

export default UserProfileCard;
