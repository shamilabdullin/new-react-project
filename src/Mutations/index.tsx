import { gql } from "apollo-boost";

export const UPDATE_STATUS = gql`
  mutation updateStatus($message: String!) {
    changeUserStatus(input: { message: $message }) {
      clientMutationId
      status {
        id
        message
        emoji
      }
    }
  }
`;
