# chat-space DB設計
## usersテーブル
|Column|Type|Option|
|------|----|------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
- has_many :messages
- has_many :groups_users
- has_many  :groups,  through:  :groups_users

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null:false|
### Association
- has_many  :uers,  through:  :groups_users
- has_many :messages
- has_many :groups_users

## messagesテーブル
|Column|Type|Option|
|------|----|------|
|text|text|null: false|
|image|text|null: false|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|
### Association
- belongs_to :group
- belongs_to :user