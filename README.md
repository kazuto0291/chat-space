# chat-space DB設計
## uersテーブル
|Column|Type|Option|
|------|----|------|
|email|string|null: false|
|password|string|null: false|
|username|string|null: false|
### Association
-has_many :messages
-has_many :

## groupsテーブル
|Column|Type|Option|
|------|----|------|
|name|string|null:false|
|member_add|string|null:false|
|member|string|null:false|
### Association
-
-
## messagesテーブル
|Column|Type|Option|
|------|----|------|
|messages|text|null: false|
|image|string|null: false|
|uses_id|integer||
### Association
-
-
## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|   
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user