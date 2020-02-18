json.name @message.user.name
json.created_at @message.created_at.strftime("%Y年%m月%d日 %H時%M分")
json.content @message.content
json.image @message.image_url

#右から左に読み替えられる
json.id @message.id
