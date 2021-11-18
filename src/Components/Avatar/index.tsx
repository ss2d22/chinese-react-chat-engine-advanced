import React from 'react';
import { stringToColor } from '../../util/colorMapping';
import { Props } from './props';
import { styles } from './styles';

export const Avatar = ({
  avatarUrl = undefined,
  username = '',
  isOnline = false,
  showOnline = false,
  customStyle = {},
  onClick = () => {},
}: Props) => {
  const text = username ? username.substring(0, 2).toUpperCase() : '';
  const color = stringToColor(username);

  return (
    <div style={{ ...styles.avatarContainer, ...customStyle.avatarContainer }}>
      <div style={{ height: '0px' }}>
        <div
          className="ce-avatar"
          onClick={onClick}
          style={{
            ...styles.avatar,
            ...{
              backgroundColor: avatarUrl ? '#FFFFFF' : color,
              backgroundImage: avatarUrl && `url(${avatarUrl})`,
            },
            ...customStyle.avatar,
          }}
        >
          <div
            className="ce-avatar-text"
            style={{ ...styles.avatarText, ...customStyle.avatarText }}
          >
            {!avatarUrl && text}
          </div>
        </div>
      </div>

      {showOnline && (
        <div
          className="ce-avatar-status"
          style={{
            ...styles.status,
            ...{ backgroundColor: isOnline ? '#52c41a' : '#f5222d' },
            ...customStyle.status,
          }}
        />
      )}
    </div>
  );
};
