<template>
  <div class="row">
    <!-- /.col -->
    <div class="col-md-9">
      <!-- Box Comment -->
      <div class="box box-widget">
        <div class="box-header with-border">
          <div class="recipe-block">
            <img class="img-circle" src="" alt="Image">
            <span class="recipe-name"><a href="#">番茄意大利面</a></span>
            <span class="description">Shared publicly - 7:30 PM Today</span>
          </div>
          <!-- /.user-block -->
          <div class="box-tools">
            <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
            </button>
          </div>
          <!-- /.box-tools -->
        </div>
        <!-- /.box-header -->
        <div class="box-body">
          <!-- post text -->
          <p>Far far away, behind the word mountains, far from the
            countries Vokalia and Consonantia, there live the blind
            texts. Separated they live in Bookmarksgrove right at</p>

          <p>the coast of the Semantics, a large language ocean.
            A small river named Duden flows by their place and supplies
            it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into
            your mouth.</p>

          <!-- Attachment -->
          <div class="attachment-block clearfix">
            <img class="attachment-img" src="" alt="Attachment Image">

            <div class="attachment-pushed">
              <h4 class="attachment-heading"><a href="http://www.lipsum.com/">Lorem ipsum text generator</a></h4>

              <div class="attachment-text">
                Description about the attachment can be placed here.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry... <a href="#">more</a>
              </div>
              <!-- /.attachment-text -->
            </div>
            <!-- /.attachment-pushed -->
          </div>
          <!-- /.attachment-block -->

          <!-- Social sharing buttons -->
          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-share"></i> Share</button>
          <button type="button" class="btn btn-default btn-xs"><i class="fa fa-thumbs-o-up"></i> Like</button>
          <span class="pull-right text-muted">45 likes - 2 comments</span>
        </div>
        <!-- /.box-body -->
        <div class="box-footer box-comments">
          <div class="box-comment">
            <!-- User image -->
            <img class="img-circle img-sm" src="" alt="Image">

            <div class="comment-text">
                      <span class="username">
                        Maria Gonzales
                        <span class="text-muted pull-right">8:03 PM Today</span>
                      </span><!-- /.username -->
              It is a long established fact that a reader will be distracted
              by the readable content of a page when looking at its layout.
            </div>
            <!-- /.comment-text -->
          </div>
          <!-- /.box-comment -->
          <div class="box-comment">
            <!-- User image -->
            <img class="img-circle img-sm" src="" alt="User Image">

            <div class="comment-text">
                      <span class="username">
                        Nora Havisham
                        <span class="text-muted pull-right">8:03 PM Today</span>
                      </span><!-- /.username -->
              The point of using Lorem Ipsum is that it has a more-or-less
              normal distribution of letters, as opposed to using
              'Content here, content here', making it look like readable English.
            </div>
            <!-- /.comment-text -->
          </div>
          <!-- /.box-comment -->
        </div>
        <!-- /.box-footer -->
        <div class="box-footer">
          <form action="#" method="post">
            <img class="img-responsive img-circle img-sm" src="" alt="Alt Text">
            <!-- .img-push is used to add margin to elements next to floating images -->
            <div class="img-push">
              <input type="text" class="form-control input-sm" placeholder="Press enter to post comment">
            </div>
          </form>
        </div>
        <!-- /.box-footer -->
      </div>
      <!-- /.box -->
    </div>
    <!-- /.col -->
  </div>
</template>

<script>
export default {
  name: '',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.recipe-block .recipe-name {
  font-size: 16px;
  font-weight: 600;
}

.recipe-block img {
  width: 40px;
  height: 40px;
  float: left;
}

.recipe-block .recipe-name,
.recipe-block .description,
.recipe-block .comment {
  display: block;
  margin-left: 50px;
}
.recipe-block .description {
  color: #999;
  font-size: 13px;
}
</style>
