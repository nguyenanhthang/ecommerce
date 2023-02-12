import React from 'react';
import { ReviewPageWrapper } from './ReviewPage.styled';
import UserReview from './components/UserReview/UserReview';
import FormReview from './components/FormReview/FormReview';

type Props = {};

const ReviewPage = (props: Props) => {
    return (
        <ReviewPageWrapper container>
            <UserReview />
            <FormReview />
        </ReviewPageWrapper>
    );
};

export default ReviewPage;
