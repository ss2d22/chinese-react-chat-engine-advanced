import React, { useState } from 'react';

import { Avatar } from '../../../Components/Avatar';

import { stringToColor } from '../../../util/colorMapping';

import { ChatCardProps } from './props';
import { styles } from './styles';

export const ChatCard: React.FC<ChatCardProps> = (props: ChatCardProps) => {
  const { title = '', description = '', timeStamp = '' } = props;

  const [hovered, setHovered] = useState<boolean>(false);

  const loadingBarStyle: React.CSSProperties = props.isLoading
    ? { ...styles.loadingBarStyle, ...props.loadingBarStyle }
    : {};

  const hasNotificationStyle: React.CSSProperties = props.hasNotification
    ? {}
    : { display: 'none' };

  if (props.renderChatCard) {
    return <>{props.renderChatCard(props)}</>;
  }

  return (
    <div
      onClick={props.onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // Default
        ...styles.style,
        // State
        ...(hovered ? styles.hoveredStyle : {}),
        ...(props.isActive ? styles.activeStyle : {}),
        // Props
        ...props.style,
        // Props + State
        ...(hovered ? props.hoveredStyle : {}),
        ...(props.isActive ? props.activeStyle : {}),
      }}
      className={`
        ce-chat-card 
        ${props.isActive && 'ce-active-chat-card'} 
        ${hovered && 'ce-hovered-chat-card'}
      `}
    >
      <Avatar
        username={props.avatarUsername}
        avatarUrl={props.avatarUrl}
        className="ce-chat-card-avatar"
        style={{
          ...styles.avatarStyle,
          ...{
            backgroundColor: props.isLoading
              ? '#e2e2e2'
              : stringToColor(props.avatarUsername),
          },
          ...props.avatarStyle,
        }}
      />

      <div
        className="ce-chat-card-title"
        style={{
          ...styles.titleStyle,
          ...loadingBarStyle,
          ...props.titleStyle,
        }}
        id={`ce-chat-card-title-${title}`}
      >
        {props.isLoading ? '.' : title}
      </div>

      <div
        className="ce-chat-card-unread"
        style={{
          ...styles.notificationStyle,
          ...hasNotificationStyle,
          ...loadingBarStyle,
          ...props.notificationStyle,
        }}
      />

      <div
        className="ce-chat-card-subtitle"
        style={{
          ...styles.subtitleStyle,
          ...loadingBarStyle,
          ...props.subtitleStyle,
        }}
      >
        <div
          className="ce-chat-card-subtitle-html"
          dangerouslySetInnerHTML={{
            __html: props.isLoading ? '.' : description,
          }}
        />
        <style>{`p {margin-block-start: 0px; margin-block-end: 0px;}`}</style>
      </div>

      <div
        className="ce-chat-card-time-stamp"
        style={{
          ...styles.timeStampStyle,
          ...loadingBarStyle,
          ...props.timeStampStyle,
        }}
      >
        {props.isLoading ? '.' : timeStamp}
      </div>
    </div>
  );
};
