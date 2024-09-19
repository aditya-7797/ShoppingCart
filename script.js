
  $(document).ready(function() {
    let $previewContainer = $('.products-preview');
    let $previewBox = $previewContainer.find('.preview');

    $('.products-container .product').click(function() {
      $previewContainer.css('display', 'flex');
      let name = $(this).data('name');

      $previewBox.each(function() {
        let target = $(this).data('target');
        if (name == target) {
          $(this).addClass('active');
        }
      });
    });

    $previewBox.find('.fa-times').click(function() {
      $(this).closest('.preview').removeClass('active');
      $previewContainer.css('display', 'none');
    });
  });

  $(document).ready(function() {
    $("#add_btn").on('click', addChapter);
    $("#cart_btn").on('click',addChapter);
    $(document).on('click', '.removeBtn', function() {
      $(this).closest('li').remove();
      let parentlist = $("#parent-list");
/*
      if (parentlist.children().length >= 1) {
        let newEmptymessage = $('<h3>').text($(this).siblings('h3').text() + ' has been permanently removed..');
        parentlist.append(newEmptymessage);
      }*/
    });
    /*
    $(document).on('click', '.editBtn', function() {
      $(this).text('Done');
      let curchaptername = $(this).siblings('h3').text();

      let curinput = $('<input>').attr({
        type: 'text',
        class: 'form-control',
        placeholder: 'Chapter Name',
        value: curchaptername
      });

      $(this).parent().find('h3').replaceWith(curinput);
    });
*/
    function addChapter() {
      let currentInput = $(this).prev();
      let currentChapterName = currentInput.val();

      let newli = $('<li>').addClass('list_group_item d-flex')
                           .html(`<h3 class="flex-grow-1">${currentChapterName} </h3>
                                  <button class="btn btn-danger removeBtn">Remove</button>`);
      $('#parent-list').append(newli);
/*
      if ($('#parent-list').children().length >= 1) {
        let newEmptymessag = $('<h3>').addClass('empmsg')
                                      .text(`${currentChapterName} has been added..`);
        $('#parent-list').append(newEmptymessag);
      }*/
    }
  });

  $(document).ready(function() {
    $(".cart").on('click', function() {
        var productId = $(this).closest('.preview').data('target');
        var parentDiv = $(".preview[data-target='" + productId + "']");
        var productName = parentDiv.find('h3').text();
        console.log( productName);

        let newli = $('<li>').addClass('list_group_item d-flex')
        .html(`<h3 class="flex-grow-1">${productName} </h3>
               <button class="btn btn-danger removeBtn">Remove</button>`);
               $('#parent-list').append(newli);
    });
});

