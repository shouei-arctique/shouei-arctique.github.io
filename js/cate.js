function butterfly_categories_card_injector_config(){
    var parent_div_git = document.getElementById('recent-posts');
    var item_html = '<div class="recent-post-item" style="height:auto;width:100%;padding:0px;">...';
    console.log('已挂载butterfly_categories_card')
    parent_div_git.insertAdjacentHTML("afterbegin",item_html)
  }
  if(document.getElementById('recent-posts') && (location.pathname ==='/'|| '/' ==='all')){
    butterfly_categories_card_injector_config()
  }
  