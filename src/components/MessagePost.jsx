import React from 'react';
import styled from 'styled-components';

import imgExample from './../assets/img/img-example.jpg';
import avatar from './../assets/icons/avatar.svg';
import favourite from './../assets/icons/favourite.svg';
import hide from './../assets/icons/hide.svg';
import settings from './../assets/icons/settings.svg';
import titr from './../assets/icons/titr.svg';
import nonFavourite from './../assets/icons/non-favourite.png';

const MessagePost = () => {
  return (
    <Root>
      <div>
        <img src={avatar} alt="avatar" />
        <Data>15:53</Data>
      </div>
      <div>
        <AuthorName>Nina Malofeeva</AuthorName>
        <MessageText>
          "Россия 1" не боится снимать сериалы о сложных и неоднозначных периодах в истории нашей
          страны. Это и "В круге первом", и "Жизнь и судьба", и "Зулейха". Идёт работа над "Одним
          днём Ивана Денисовича". Вопрос Антону Златопольскому -почему вы считаете
        </MessageText>
        <MoreButton>Далее</MoreButton>
        <PostImg>
          <img src={imgExample} alt="post img" />
        </PostImg>
      </div>
      <Icons>
        <img src={titr} alt="to titr" />
        <img src={hide} alt="hide message" />
        <img src={settings} alt="settings" />
        <img src={favourite} alt="favourite" />
      </Icons>
    </Root>
  );
};

export default MessagePost;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  gap: 10px;
  font-family: Arial;
  position: relative;
`;

const Data = styled.div`
  color: #808080;
  margin-top: 8px;
`;

const AuthorName = styled.div`
  color: #808080;
  font-size: 16px;
`;

const MessageText = styled.div`
  font-size: 16px;
  line-height: 21px;
  color: #333;
  margin-top: 10px;
`;

const MoreButton = styled.div`
  color: #808080;
  font-size: 12px;
  margin-top: 5px;
`;

const PostImg = styled.div`
  width: 150px;
  margin-top: 10px;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 12%;
  position: absolute;
  top: 10px;
  right: 10px;
  align-items: center;
`;
