import React from "react";
import { StyledTile, Avatar, LoginName, FlexWrapper } from "./styles";
import { IUser } from "../../types";
import { Link } from "react-router-dom";

interface IProps {
  user: IUser;
}

const UserListItem = ({ user }: IProps) => {
  return (
    <StyledTile>
      <FlexWrapper>
        <Avatar>
          <img style={{ maxWidth: 40 }} src={user.avatarUrl} alt={user.name} />
        </Avatar>
        <div>
          <h3>
            {user.name} <Link to={`/users/${user.login}`}>Profile</Link>
          </h3>
          <LoginName>{user.login}</LoginName>
        </div>
      </FlexWrapper>
      <p>{user.bio}</p>
    </StyledTile>
  );
};

export default UserListItem;
