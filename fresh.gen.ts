// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $addFriend_index from "./routes/addFriend/index.tsx";
import * as $api_v2_client_block_server from "./routes/api/v2/client/block/server.ts";
import * as $api_v2_client_block_user from "./routes/api/v2/client/block/user.ts";
import * as $api_v2_client_chart from "./routes/api/v2/client/chart.ts";
import * as $api_v2_client_create_community from "./routes/api/v2/client/create/community.ts";
import * as $api_v2_client_create_group from "./routes/api/v2/client/create/group.ts";
import * as $api_v2_client_csrftoken from "./routes/api/v2/client/csrftoken.ts";
import * as $api_v2_client_friends_info_ID_icon_friend from "./routes/api/v2/client/friends/info/[ID]/icon/friend.ts";
import * as $api_v2_client_friends_info_ID_icon_friendcode from "./routes/api/v2/client/friends/info/[ID]/icon/friendcode.ts";
import * as $api_v2_client_friends_info_ID_icon_group from "./routes/api/v2/client/friends/info/[ID]/icon/group.ts";
import * as $api_v2_client_friends_info_ID_profile_friend from "./routes/api/v2/client/friends/info/[ID]/profile/friend.ts";
import * as $api_v2_client_friends_info_ID_profile_friendcode from "./routes/api/v2/client/friends/info/[ID]/profile/friendcode.ts";
import * as $api_v2_client_friends_info_ID_profile_group from "./routes/api/v2/client/friends/info/[ID]/profile/group.ts";
import * as $api_v2_client_friends_list from "./routes/api/v2/client/friends/list.ts";
import * as $api_v2_client_friends_request_list from "./routes/api/v2/client/friends/request/list.ts";
import * as $api_v2_client_main from "./routes/api/v2/client/main.ts";
import * as $api_v2_client_sessions_login from "./routes/api/v2/client/sessions/login.ts";
import * as $api_v2_client_sessions_logout from "./routes/api/v2/client/sessions/logout.ts";
import * as $api_v2_client_sessions_registers_auth from "./routes/api/v2/client/sessions/registers/auth.ts";
import * as $api_v2_client_sessions_registers_check from "./routes/api/v2/client/sessions/registers/check.ts";
import * as $api_v2_client_sessions_registers_setup from "./routes/api/v2/client/sessions/registers/setup.ts";
import * as $api_v2_client_sessions_registers_temp from "./routes/api/v2/client/sessions/registers/temp.ts";
import * as $api_v2_client_settings_icon from "./routes/api/v2/client/settings/icon.ts";
import * as $api_v2_client_settings_nickname from "./routes/api/v2/client/settings/nickname.ts";
import * as $api_v2_client_settings_privacy from "./routes/api/v2/client/settings/privacy.ts";
import * as $api_v2_client_talks_community_audio from "./routes/api/v2/client/talks/community/audio.ts";
import * as $api_v2_client_talks_community_image from "./routes/api/v2/client/talks/community/image.ts";
import * as $api_v2_client_talks_community_text from "./routes/api/v2/client/talks/community/text.ts";
import * as $api_v2_client_talks_community_update from "./routes/api/v2/client/talks/community/update.ts";
import * as $api_v2_client_talks_community_video from "./routes/api/v2/client/talks/community/video.ts";
import * as $api_v2_client_talks_delete from "./routes/api/v2/client/talks/delete.ts";
import * as $api_v2_client_talks_friend_audio from "./routes/api/v2/client/talks/friend/audio.ts";
import * as $api_v2_client_talks_friend_image from "./routes/api/v2/client/talks/friend/image.ts";
import * as $api_v2_client_talks_friend_text from "./routes/api/v2/client/talks/friend/text.ts";
import * as $api_v2_client_talks_friend_update from "./routes/api/v2/client/talks/friend/update.ts";
import * as $api_v2_client_talks_friend_video from "./routes/api/v2/client/talks/friend/video.ts";
import * as $api_v2_client_talks_group_audio from "./routes/api/v2/client/talks/group/audio.ts";
import * as $api_v2_client_talks_group_image from "./routes/api/v2/client/talks/group/image.ts";
import * as $api_v2_client_talks_group_text from "./routes/api/v2/client/talks/group/text.ts";
import * as $api_v2_client_talks_group_update from "./routes/api/v2/client/talks/group/update.ts";
import * as $api_v2_client_talks_group_video from "./routes/api/v2/client/talks/group/video.ts";
import * as $api_v2_client_talks_read from "./routes/api/v2/client/talks/read.ts";
import * as $api_v2_client_unblock_server from "./routes/api/v2/client/unblock/server.ts";
import * as $api_v2_client_unblock_user from "./routes/api/v2/client/unblock/user.ts";
import * as $api_v2_client_users_uuid_icon from "./routes/api/v2/client/users/[uuid]/icon.ts";
import * as $api_v2_client_users_friendkey from "./routes/api/v2/client/users/friendkey.ts";
import * as $api_v2_client_users_icon from "./routes/api/v2/client/users/icon.ts";
import * as $api_v2_client_users_profile from "./routes/api/v2/client/users/profile.ts";
import * as $api_v2_client_users_settings from "./routes/api/v2/client/users/settings.ts";
import * as $api_v2_client_welcome from "./routes/api/v2/client/welcome.ts";
import * as $api_v2_server_activity_accept_community from "./routes/api/v2/server/activity/accept/community.ts";
import * as $api_v2_server_activity_accept_friend from "./routes/api/v2/server/activity/accept/friend.ts";
import * as $api_v2_server_activity_accept_group from "./routes/api/v2/server/activity/accept/group.ts";
import * as $api_v2_server_activity_block_user from "./routes/api/v2/server/activity/block/user.ts";
import * as $api_v2_server_activity_delete_message from "./routes/api/v2/server/activity/delete/message.ts";
import * as $api_v2_server_activity_flag_community from "./routes/api/v2/server/activity/flag/community.ts";
import * as $api_v2_server_activity_flag_group from "./routes/api/v2/server/activity/flag/group.ts";
import * as $api_v2_server_activity_flag_user from "./routes/api/v2/server/activity/flag/user.ts";
import * as $api_v2_server_activity_ignore_friend from "./routes/api/v2/server/activity/ignore/friend.ts";
import * as $api_v2_server_activity_ignore_group from "./routes/api/v2/server/activity/ignore/group.ts";
import * as $api_v2_server_activity_invite_group from "./routes/api/v2/server/activity/invite/group.ts";
import * as $api_v2_server_activity_join_community from "./routes/api/v2/server/activity/join/community.ts";
import * as $api_v2_server_activity_read_message from "./routes/api/v2/server/activity/read/message.ts";
import * as $api_v2_server_activity_request_community from "./routes/api/v2/server/activity/request/community.ts";
import * as $api_v2_server_activity_request_friend from "./routes/api/v2/server/activity/request/friend.ts";
import * as $api_v2_server_activity_talk_audio from "./routes/api/v2/server/activity/talk/audio.ts";
import * as $api_v2_server_activity_talk_image from "./routes/api/v2/server/activity/talk/image.ts";
import * as $api_v2_server_activity_talk_text from "./routes/api/v2/server/activity/talk/text.ts";
import * as $api_v2_server_activity_talk_video from "./routes/api/v2/server/activity/talk/video.ts";
import * as $api_v2_server_activity_update_profile from "./routes/api/v2/server/activity/update/profile.ts";
import * as $api_v2_server_activity_update_text from "./routes/api/v2/server/activity/update/text.ts";
import * as $api_v2_server_blocked from "./routes/api/v2/server/blocked.ts";
import * as $api_v2_server_info from "./routes/api/v2/server/info.ts";
import * as $api_v2_server_information_talk_ID_image from "./routes/api/v2/server/information/talk/[ID]/image.ts";
import * as $api_v2_server_information_talk_ID_index from "./routes/api/v2/server/information/talk/[ID]/index.ts";
import * as $api_v2_server_information_users_changes from "./routes/api/v2/server/information/users/changes.ts";
import * as $api_v2_server_information_users_icon from "./routes/api/v2/server/information/users/icon.ts";
import * as $api_v2_server_information_users_profile from "./routes/api/v2/server/information/users/profile.ts";
import * as $api_v2_server_pubkey from "./routes/api/v2/server/pubkey.ts";
import * as $index from "./routes/index.tsx";
import * as $setting_index from "./routes/setting/index.tsx";
import * as $talk_index from "./routes/talk/index.tsx";
import * as $ChatSend from "./islands/ChatSend.tsx";
import * as $ChatTalkContent from "./islands/ChatTalkContent.tsx";
import * as $ChatTalkTitle from "./islands/ChatTalkTitle.tsx";
import * as $ChatTalkTitleContent from "./islands/ChatTalkTitleContent.tsx";
import * as $FriendRequest from "./islands/FriendRequest.tsx";
import * as $Login from "./islands/Login.tsx";
import * as $ReCapcha from "./islands/ReCapcha.tsx";
import * as $Register from "./islands/Register.tsx";
import * as $RequestFriendById from "./islands/RequestFriendById.tsx";
import * as $TalkListContent from "./islands/TalkListContent.tsx";
import * as $getAddFriendKey from "./islands/getAddFriendKey.tsx";
import * as $headerButton from "./islands/headerButton.tsx";
import * as $setDefaultState from "./islands/setDefaultState.tsx";
import * as $setup from "./islands/setup.tsx";
import * as $talkListHeader from "./islands/talkListHeader.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_middleware.ts": $_middleware,
    "./routes/addFriend/index.tsx": $addFriend_index,
    "./routes/api/v2/client/block/server.ts": $api_v2_client_block_server,
    "./routes/api/v2/client/block/user.ts": $api_v2_client_block_user,
    "./routes/api/v2/client/chart.ts": $api_v2_client_chart,
    "./routes/api/v2/client/create/community.ts": $api_v2_client_create_community,
    "./routes/api/v2/client/create/group.ts": $api_v2_client_create_group,
    "./routes/api/v2/client/csrftoken.ts": $api_v2_client_csrftoken,
    "./routes/api/v2/client/friends/info/[ID]/icon/friend.ts": $api_v2_client_friends_info_ID_icon_friend,
    "./routes/api/v2/client/friends/info/[ID]/icon/friendcode.ts": $api_v2_client_friends_info_ID_icon_friendcode,
    "./routes/api/v2/client/friends/info/[ID]/icon/group.ts": $api_v2_client_friends_info_ID_icon_group,
    "./routes/api/v2/client/friends/info/[ID]/profile/friend.ts": $api_v2_client_friends_info_ID_profile_friend,
    "./routes/api/v2/client/friends/info/[ID]/profile/friendcode.ts": $api_v2_client_friends_info_ID_profile_friendcode,
    "./routes/api/v2/client/friends/info/[ID]/profile/group.ts": $api_v2_client_friends_info_ID_profile_group,
    "./routes/api/v2/client/friends/list.ts": $api_v2_client_friends_list,
    "./routes/api/v2/client/friends/request/list.ts": $api_v2_client_friends_request_list,
    "./routes/api/v2/client/main.ts": $api_v2_client_main,
    "./routes/api/v2/client/sessions/login.ts": $api_v2_client_sessions_login,
    "./routes/api/v2/client/sessions/logout.ts": $api_v2_client_sessions_logout,
    "./routes/api/v2/client/sessions/registers/auth.ts": $api_v2_client_sessions_registers_auth,
    "./routes/api/v2/client/sessions/registers/check.ts": $api_v2_client_sessions_registers_check,
    "./routes/api/v2/client/sessions/registers/setup.ts": $api_v2_client_sessions_registers_setup,
    "./routes/api/v2/client/sessions/registers/temp.ts": $api_v2_client_sessions_registers_temp,
    "./routes/api/v2/client/settings/icon.ts": $api_v2_client_settings_icon,
    "./routes/api/v2/client/settings/nickname.ts": $api_v2_client_settings_nickname,
    "./routes/api/v2/client/settings/privacy.ts": $api_v2_client_settings_privacy,
    "./routes/api/v2/client/talks/community/audio.ts": $api_v2_client_talks_community_audio,
    "./routes/api/v2/client/talks/community/image.ts": $api_v2_client_talks_community_image,
    "./routes/api/v2/client/talks/community/text.ts": $api_v2_client_talks_community_text,
    "./routes/api/v2/client/talks/community/update.ts": $api_v2_client_talks_community_update,
    "./routes/api/v2/client/talks/community/video.ts": $api_v2_client_talks_community_video,
    "./routes/api/v2/client/talks/delete.ts": $api_v2_client_talks_delete,
    "./routes/api/v2/client/talks/friend/audio.ts": $api_v2_client_talks_friend_audio,
    "./routes/api/v2/client/talks/friend/image.ts": $api_v2_client_talks_friend_image,
    "./routes/api/v2/client/talks/friend/text.ts": $api_v2_client_talks_friend_text,
    "./routes/api/v2/client/talks/friend/update.ts": $api_v2_client_talks_friend_update,
    "./routes/api/v2/client/talks/friend/video.ts": $api_v2_client_talks_friend_video,
    "./routes/api/v2/client/talks/group/audio.ts": $api_v2_client_talks_group_audio,
    "./routes/api/v2/client/talks/group/image.ts": $api_v2_client_talks_group_image,
    "./routes/api/v2/client/talks/group/text.ts": $api_v2_client_talks_group_text,
    "./routes/api/v2/client/talks/group/update.ts": $api_v2_client_talks_group_update,
    "./routes/api/v2/client/talks/group/video.ts": $api_v2_client_talks_group_video,
    "./routes/api/v2/client/talks/read.ts": $api_v2_client_talks_read,
    "./routes/api/v2/client/unblock/server.ts": $api_v2_client_unblock_server,
    "./routes/api/v2/client/unblock/user.ts": $api_v2_client_unblock_user,
    "./routes/api/v2/client/users/[uuid]/icon.ts": $api_v2_client_users_uuid_icon,
    "./routes/api/v2/client/users/friendkey.ts": $api_v2_client_users_friendkey,
    "./routes/api/v2/client/users/icon.ts": $api_v2_client_users_icon,
    "./routes/api/v2/client/users/profile.ts": $api_v2_client_users_profile,
    "./routes/api/v2/client/users/settings.ts": $api_v2_client_users_settings,
    "./routes/api/v2/client/welcome.ts": $api_v2_client_welcome,
    "./routes/api/v2/server/activity/accept/community.ts": $api_v2_server_activity_accept_community,
    "./routes/api/v2/server/activity/accept/friend.ts": $api_v2_server_activity_accept_friend,
    "./routes/api/v2/server/activity/accept/group.ts": $api_v2_server_activity_accept_group,
    "./routes/api/v2/server/activity/block/user.ts": $api_v2_server_activity_block_user,
    "./routes/api/v2/server/activity/delete/message.ts": $api_v2_server_activity_delete_message,
    "./routes/api/v2/server/activity/flag/community.ts": $api_v2_server_activity_flag_community,
    "./routes/api/v2/server/activity/flag/group.ts": $api_v2_server_activity_flag_group,
    "./routes/api/v2/server/activity/flag/user.ts": $api_v2_server_activity_flag_user,
    "./routes/api/v2/server/activity/ignore/friend.ts": $api_v2_server_activity_ignore_friend,
    "./routes/api/v2/server/activity/ignore/group.ts": $api_v2_server_activity_ignore_group,
    "./routes/api/v2/server/activity/invite/group.ts": $api_v2_server_activity_invite_group,
    "./routes/api/v2/server/activity/join/community.ts": $api_v2_server_activity_join_community,
    "./routes/api/v2/server/activity/read/message.ts": $api_v2_server_activity_read_message,
    "./routes/api/v2/server/activity/request/community.ts": $api_v2_server_activity_request_community,
    "./routes/api/v2/server/activity/request/friend.ts": $api_v2_server_activity_request_friend,
    "./routes/api/v2/server/activity/talk/audio.ts": $api_v2_server_activity_talk_audio,
    "./routes/api/v2/server/activity/talk/image.ts": $api_v2_server_activity_talk_image,
    "./routes/api/v2/server/activity/talk/text.ts": $api_v2_server_activity_talk_text,
    "./routes/api/v2/server/activity/talk/video.ts": $api_v2_server_activity_talk_video,
    "./routes/api/v2/server/activity/update/profile.ts": $api_v2_server_activity_update_profile,
    "./routes/api/v2/server/activity/update/text.ts": $api_v2_server_activity_update_text,
    "./routes/api/v2/server/blocked.ts": $api_v2_server_blocked,
    "./routes/api/v2/server/info.ts": $api_v2_server_info,
    "./routes/api/v2/server/information/talk/[ID]/image.ts": $api_v2_server_information_talk_ID_image,
    "./routes/api/v2/server/information/talk/[ID]/index.ts": $api_v2_server_information_talk_ID_index,
    "./routes/api/v2/server/information/users/changes.ts": $api_v2_server_information_users_changes,
    "./routes/api/v2/server/information/users/icon.ts": $api_v2_server_information_users_icon,
    "./routes/api/v2/server/information/users/profile.ts": $api_v2_server_information_users_profile,
    "./routes/api/v2/server/pubkey.ts": $api_v2_server_pubkey,
    "./routes/index.tsx": $index,
    "./routes/setting/index.tsx": $setting_index,
    "./routes/talk/index.tsx": $talk_index,
  },
  islands: {
    "./islands/ChatSend.tsx": $ChatSend,
    "./islands/ChatTalkContent.tsx": $ChatTalkContent,
    "./islands/ChatTalkTitle.tsx": $ChatTalkTitle,
    "./islands/ChatTalkTitleContent.tsx": $ChatTalkTitleContent,
    "./islands/FriendRequest.tsx": $FriendRequest,
    "./islands/Login.tsx": $Login,
    "./islands/ReCapcha.tsx": $ReCapcha,
    "./islands/Register.tsx": $Register,
    "./islands/RequestFriendById.tsx": $RequestFriendById,
    "./islands/TalkListContent.tsx": $TalkListContent,
    "./islands/getAddFriendKey.tsx": $getAddFriendKey,
    "./islands/headerButton.tsx": $headerButton,
    "./islands/setDefaultState.tsx": $setDefaultState,
    "./islands/setup.tsx": $setup,
    "./islands/talkListHeader.tsx": $talkListHeader,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
