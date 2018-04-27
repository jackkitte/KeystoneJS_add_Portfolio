var keystone = require('keystone');
var Types = keystone.Field.Types;

var Work = new keystone.List('Work', {
  map: { name: 'title' },
  autokey: { path: 'slug', from: 'title', unique: true },
  defaultSort: '-createdAt',
});

Work.add({
  title: { label: 'タイトル', type: String, required: true },
  manMonth: { label: '制作日数', type: Number },
  content: { label: '説明文', type: Types.Markdown, toolbarOptions: { hiddenButtons: '' }, height: 400 },
  message: { label: '制作ポイント', type: Types.Textarea, height: 200 },
  image: { label: '画像', type: Types.CloudinaryImage },
  publishedDate: { label: '投稿日', type: Date, default: Date.now },
});

Work.register();
