import React from 'react';
import {
    ArangePointWrapper,
    BaseRating,
    BaseReviewWrapper,
    TextPoint,
    TopReview,
    UserReviewInfo,
    UserReviewName,
    UserReviewWrapper,
    UserWrapper,
    UserReviewRating,
    UserReviewComment
} from './userReview.styled';
import IconsComponent from 'components/Icons/IconsComponent';
import { Box, Rating } from '@mui/material';
import images from 'assets';

const UserReview = () => {
    
    const [value, setValue] = React.useState<number | null>(4);
    return (
        <UserReviewWrapper>
            <TopReview>
                <ArangePointWrapper>
                    <TextPoint variant='h5'>Overall</TextPoint>
                    <TextPoint variant='h4' sx={{ color: '#FD8F5F' }}>
                        4.0
                    </TextPoint>
                    <TextPoint variant='h6'>(03 Reviews)</TextPoint>
                </ArangePointWrapper>
                <BaseReviewWrapper>
                    <BaseRating>Based on 3 Reviews</BaseRating>
                    <BaseRating>
                        5 Star{' '}
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue: any) => {
                                setValue(newValue);
                            }}
                        />
                    </BaseRating>
                    <BaseRating>
                        4 Star{' '}
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </BaseRating>
                    <BaseRating>
                        3 Star{' '}
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </BaseRating>
                    <BaseRating>
                        2 Star{' '}
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </BaseRating>
                    <BaseRating>
                        1 Star{' '}
                        <Rating
                            name='simple-controlled'
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </BaseRating>
                </BaseReviewWrapper>
            </TopReview>
            <UserWrapper>
                <UserReviewInfo>
                    <IconsComponent LinkIcons={images.userReview1} />
                    <Box sx={{ ml: '2', display: 'flex', flexDirection: 'column' }}>
                        <UserReviewName>Blake Ruiz</UserReviewName>
                        <UserReviewRating>
                            <Rating
                                name='simple-controlled'
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </UserReviewRating>
                    </Box>
                </UserReviewInfo>
                <UserReviewComment>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo
                </UserReviewComment>
            </UserWrapper>
            <UserWrapper>
                <UserReviewInfo>
                    <IconsComponent LinkIcons={images.userReview1} />
                    <Box sx={{ ml: '2', display: 'flex', flexDirection: 'column' }}>
                        <UserReviewName>Blake Ruiz</UserReviewName>
                        <UserReviewRating>
                            <Rating
                                name='simple-controlled'
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </UserReviewRating>
                    </Box>
                </UserReviewInfo>
                <UserReviewComment>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo
                </UserReviewComment>
            </UserWrapper>
            <UserWrapper>
                <UserReviewInfo>
                    <IconsComponent LinkIcons={images.userReview1} />
                    <Box sx={{ ml: '2', display: 'flex', flexDirection: 'column' }}>
                        <UserReviewName>Blake Ruiz</UserReviewName>
                        <UserReviewRating>
                            <Rating
                                name='simple-controlled'
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </UserReviewRating>
                    </Box>
                </UserReviewInfo>
                <UserReviewComment>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo
                </UserReviewComment>
            </UserWrapper>
        </UserReviewWrapper>
    );
};

export default UserReview;
