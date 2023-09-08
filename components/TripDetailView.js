import { styled } from "styled-components";
import PrimaryLink from "./PrimaryLink";
import moment from "moment";

export default function TravelDetailView({
  trip,
  handleDelete,
  tripId,
  todos,
}) {
  const handleOpenDialog = () => {
    deleteDialog.showModal();
  };

  return (
    <>
      <FlexContainer key={trip.tripId}>
        <TodoLink href={`/TripDetailPage/TaskPage/${tripId}`}>
          You have:
          {todos.filter((todo) => todo.tripId === tripId).length} task left
        </TodoLink>
        <StyledTripName>{trip.tripName}</StyledTripName>
        <DetailWrapper>
          <StyledSvgContainer>
            <StyledSvg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                opacity="0.4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.1838 6.35186H18.8621V4.56409H11.1838V6.35186ZM9.43707 4.6375V4.6464C8.83768 4.70092 8.24473 4.81995 7.66786 4.99906V4.99239C7.65071 4.9996 7.63457 5.00515 7.61907 5.01048C7.59873 5.01747 7.57951 5.02408 7.56064 5.03355C7.51453 5.04468 7.4695 5.06136 7.42661 5.0825C7.30008 5.12366 7.17356 5.17261 7.05454 5.22267C7.02291 5.23491 6.99128 5.2491 6.95965 5.26328C6.92801 5.27746 6.89638 5.29165 6.86475 5.30389C6.82133 5.32447 6.77602 5.347 6.73072 5.36952C6.68542 5.39205 6.64012 5.41458 6.59669 5.43516L6.38224 5.55865C6.34259 5.57887 6.30589 5.60258 6.26844 5.62679C6.24614 5.6412 6.22357 5.65578 6.19996 5.6699C5.87721 5.87793 5.57806 6.12157 5.30785 6.39858L5.29177 6.41526C5.25628 6.45663 5.22094 6.49677 5.18608 6.53637C5.1272 6.60325 5.06968 6.66858 5.01513 6.73566L4.99905 6.75124C4.12195 7.96163 3.68233 9.45347 3.75846 10.9653V11.4448H5.49013V10.9609C5.49013 8.85384 6.16136 7.54222 7.655 6.87027C8.22543 6.62886 8.82803 6.47979 9.44136 6.42528H9.45744V4.64529L9.43707 4.6375ZM24.9975 6.72899L25.005 6.74456C25.881 7.95606 26.3185 9.44903 26.2413 10.9609V11.4448H24.5107V10.9487C24.5471 10.0564 24.3681 9.16868 23.9885 8.36657C23.6239 7.68017 23.0406 7.14728 22.3362 6.85804C21.7754 6.61663 21.1814 6.46644 20.5755 6.41304V4.64195C21.1749 4.69758 21.7679 4.8155 22.3458 4.99461V4.98571C22.3783 5.00045 22.4031 5.00921 22.4456 5.02424L22.453 5.02688C22.4728 5.03386 22.4912 5.04084 22.5094 5.04773C22.5347 5.05733 22.5596 5.06677 22.5871 5.07583C22.7056 5.11472 22.8165 5.16057 22.9306 5.20773L22.9506 5.216C23.0032 5.23449 23.0528 5.25742 23.0975 5.27808C23.1119 5.28477 23.1259 5.29122 23.1393 5.29721C23.2336 5.33837 23.3301 5.38732 23.4073 5.42849C23.4588 5.4552 23.509 5.4838 23.556 5.51061C23.5814 5.52511 23.606 5.53909 23.6293 5.55197C23.6677 5.57319 23.7011 5.59589 23.7332 5.61771C23.7567 5.63366 23.7795 5.64913 23.803 5.66322C24.1268 5.87237 24.4292 6.11712 24.7026 6.3919L24.7123 6.40859C24.813 6.50983 24.9085 6.61663 24.9975 6.72899Z"
                fill="black"
              />
              <path
                d="M20.625 3.39616V7.33558C20.625 7.83193 20.2223 8.23396 19.725 8.23396C19.2278 8.23396 18.825 7.83193 18.825 7.33558V3.40514C18.8205 2.90879 19.221 2.50339 19.7183 2.50002C20.2155 2.49665 20.6217 2.89531 20.625 3.39167V3.39616Z"
                fill="black"
              />
              <path
                d="M11.175 3.41049V7.34017C11.175 7.83868 10.7718 8.24287 10.2744 8.24287C9.77712 8.24287 9.375 7.83868 9.375 7.34017V3.41049C9.375 2.91198 9.77712 2.50891 10.2744 2.50891C10.7718 2.50891 11.175 2.91198 11.175 3.41049Z"
                fill="black"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 21.1376V11.4448H26.25V21.1376C26.25 25.3644 23.8895 27.4999 19.2114 27.4999H10.7779C6.11052 27.4999 3.75 25.3644 3.75 21.1376ZM8.82513 16.8334C8.82513 17.4198 9.2865 17.8956 9.85517 17.8956C10.4346 17.8956 10.8959 17.4088 10.8852 16.8223C10.8852 16.2359 10.4238 15.7601 9.8659 15.7601H9.85517C9.2865 15.7601 8.82513 16.247 8.82513 16.8334ZM13.9646 16.8334C13.9646 17.4198 14.4367 17.8956 15.0054 17.8956C15.574 17.8956 16.0354 17.4198 16.0354 16.8223C16.0354 16.247 15.574 15.7712 15.0054 15.7601H14.9946C14.426 15.7712 13.9646 16.247 13.9646 16.8334ZM20.1449 17.8956C19.5762 17.8956 19.1148 17.4198 19.1148 16.8334C19.1148 16.247 19.5655 15.7712 20.1449 15.7712C20.7135 15.7712 21.1749 16.247 21.1749 16.8334C21.1749 17.4198 20.7135 17.8956 20.1449 17.8956ZM20.1449 22.4322C19.5762 22.4322 19.1148 21.9564 19.1041 21.37C19.1041 20.7836 19.5655 20.3078 20.1341 20.3078H20.1449C20.7135 20.3078 21.1749 20.7836 21.1749 21.37C21.1749 21.9564 20.7135 22.4322 20.1449 22.4322ZM15.0054 22.4322C14.4367 22.4322 13.9646 21.9564 13.9646 21.37C13.9646 20.7836 14.426 20.3078 14.9946 20.2967H15.0054C15.574 20.3078 16.0247 20.7836 16.0354 21.3589C16.0354 21.9564 15.574 22.4322 15.0054 22.4322ZM9.85515 22.4322C9.28648 22.4322 8.82511 21.9564 8.82511 21.37C8.81438 20.7836 9.27575 20.2967 9.85515 20.2967C10.4238 20.2967 10.8852 20.7725 10.8852 21.3589C10.8852 21.9454 10.4238 22.4322 9.85515 22.4322Z"
                fill="black"
              />
            </StyledSvg>
          </StyledSvgContainer>
          {moment(trip.tripStart).format("LL")} <br />
          {moment(trip.tripEnd).format("LL")}
        </DetailWrapper>
        <DetailWrapper>
          <StyledSvgContainer>
            <StyledSvg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
            >
              <path
                clip-rule="evenodd"
                d="M10.6645 3.67096C13.3956 2.08409 16.7525 2.11183 19.458 3.74362C22.1368 5.40864 23.765 8.38022 23.7498 11.5768C23.6874 14.7524 21.9416 17.7375 19.7593 20.0451C18.4998 21.383 17.0908 22.566 15.5611 23.57C15.4035 23.6611 15.2309 23.7221 15.0519 23.75C14.8795 23.7427 14.7116 23.6917 14.5634 23.6018C12.228 22.0932 10.1792 20.1675 8.51542 17.9175C7.12324 16.0392 6.33229 13.77 6.25 11.418C6.24819 8.21531 7.93346 5.25784 10.6645 3.67096ZM12.2427 12.7434C12.7021 13.876 13.7865 14.6147 14.9895 14.6147C15.7776 14.6204 16.5352 14.3047 17.0935 13.738C17.6518 13.1713 17.9644 12.4007 17.9616 11.5979C17.9658 10.3725 17.2443 9.26533 16.1341 8.79341C15.0238 8.32148 13.7438 8.57788 12.8916 9.44287C12.0395 10.3079 11.7833 11.6108 12.2427 12.7434Z"
                fill="black"
              />
              <path
                opacity="0.4"
                d="M15 27.5C18.4518 27.5 21.25 26.9404 21.25 26.25C21.25 25.5596 18.4518 25 15 25C11.5482 25 8.75 25.5596 8.75 26.25C8.75 26.9404 11.5482 27.5 15 27.5Z"
                fill="black"
              />
            </StyledSvg>
          </StyledSvgContainer>
          {trip.tripDestination}
        </DetailWrapper>
        <FlexArticle>
          <FlexContainer>
            <StyledTribeMembers>Tribe members</StyledTribeMembers>
            <DetailWrapper>
              <StyledSvgContainer>
                <StyledSvg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <ellipse
                    cx="10.6141"
                    cy="6.67153"
                    rx="4.37986"
                    ry="4.37986"
                    stroke="#807A7A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.6667 17.1429C3.66553 16.835 3.73439 16.5309 3.86807 16.2535C4.2876 15.4145 5.47067 14.9698 6.45236 14.7684C7.16036 14.6173 7.87813 14.5164 8.60034 14.4664C9.93746 14.3489 11.2823 14.3489 12.6194 14.4664C13.3416 14.517 14.0593 14.6179 14.7674 14.7684C15.7491 14.9698 16.9321 15.3725 17.3517 16.2535C17.6205 16.8189 17.6205 17.4753 17.3517 18.0407C16.9321 18.9217 15.7491 19.3245 14.7674 19.5175C14.0602 19.6748 13.3422 19.7786 12.6194 19.8279C11.5311 19.9202 10.4377 19.937 9.3471 19.8783C9.09538 19.8783 8.85206 19.8783 8.60034 19.8279C7.88027 19.7792 7.16498 19.6754 6.46075 19.5175C5.47067 19.3245 4.29599 18.9217 3.86807 18.0407C3.73507 17.7601 3.66628 17.4534 3.6667 17.1429Z"
                    stroke="#807A7A"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </StyledSvg>
              </StyledSvgContainer>
              <StyledUser>
                {trip.tripUser && trip.tripUser.join(", ")}
              </StyledUser>
            </DetailWrapper>
          </FlexContainer>
        </FlexArticle>
        <StyledAboutHeader>About trip</StyledAboutHeader>
        <StyledDesription>{trip.tripDescription}</StyledDesription>
        <StyledDeleteButton onClick={handleOpenDialog}>
          <svg
            width={20}
            height={20}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
          </svg>
        </StyledDeleteButton>
      </FlexContainer>
      <DeleteDialog id="deleteDialog">
        <p>You are about to delete this trip. Are you sure?</p>
        <form method="dialog">
          <ButtonContainer>
            <CancelButton>No!</CancelButton>
            <BackLinkDelete onClick={() => handleDelete(trip)} href="/">
              Yes!
            </BackLinkDelete>
          </ButtonContainer>
        </form>
      </DeleteDialog>
    </>
  );
}

const FlexArticle = styled.article`
  & svg {
    width: 2rem;
    height: 2rem;
  }
`;

const FlexContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  border-radius: 0.5rem;
  flex-direction: column;
  max-width: 400px;
`;

const StyledDeleteButton = styled.button`
  align-self: center;
  cursor: pointer;
  border-radius: 15px;
  padding: 15px;
  background-color: #eef0ff;
  color: red;
  width: 50px;
  height: 50px;
  &:hover {
    background-color: red;
    color: white;
  }
`;
const CancelButton = styled.button`
  align-self: center;
  font-size: small;
  padding: 15px;
  border-style: none;
  background-color: transparent;
  color: green;
  text-align: center;
  cursor: pointer;
  border-radius: 15px;
  text-decoration: none;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #29d697;
    color: white;
  }
`;
const BackLinkDelete = styled(PrimaryLink)`
  align-self: center;
  font-size: small;
  background-color: transparent;
  color: red;
  width: 50px;
  &:hover {
    background-color: red;
    color: white;
  }
`;

const DeleteDialog = styled.dialog`
  background-color: white;
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  border-style: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  margin-top: 1rem;
`;
const TodoLink = styled(PrimaryLink)`
  margin-top: -108px;
  align-self: center;
  z-index: 1;
  color: black;
  border-radius: 30px;
  background: #fefeff;
  font-size: 13px;
  box-shadow: 0px 20px 20px 0px rgba(90, 90, 90, 0.1);
  backdrop-filter: blur(10.873126983642578px);
  &:hover {
    background: #4fabf7;
    color: white;
  }
`;

const StyledTripName = styled.h2`
  font-size: 35px;
`;

const StyledTribeMembers = styled.p`
  color: #747688;
  font-size: 18px;
  font-weight: 600;
  line-height: 34px;
  opacity: 0.84;
`;

const StyledUser = styled.span`
  display: flex;
  align-items: center;
  width: 46.29px;
  height: 25.179px;
  color: #706e8f;
`;

const StyledAboutHeader = styled.h3`
  color: #747688;
  font-size: 18px;
  font-weight: 600;
  line-height: 34px;
  opacity: 0.84;
`;

const StyledDesription = styled.p`
  color: #9e9e9e;
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin-top: auto;
  word-break: break-all;
`;

const StyledSvg = styled.svg`
  width: 30px;
  height: 30px;
  fill: black;
`;

const StyledSvgContainer = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: #eef0ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DetailWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 600;
  margin-bottom: 15px;
`;
