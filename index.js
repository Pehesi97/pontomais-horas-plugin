document.addEventListener('DOMContentLoaded', function() {
    var enabledCheckbox = document.getElementById('enabled');
    checkPageButton.addEventListener('click', function() {
  
      chrome.tabs.getSelected(null, function(tab) {
        d = document;
  
        var f = d.createElement('form');
        f.action = 'http://gtmetrix.com/analyze.html?bm';
        f.method = 'post';
        var i = d.createElement('input');
        i.type = 'hidden';
        i.name = 'url';
        i.value = tab.url;
        f.appendChild(i);
        d.body.appendChild(f);
        f.submit();
      });
    }, false);
  }, false);

  $(document).ready(function() {
    $('#enabled').change(function() {        
        if (this.checked) {
            $('#horas-faltantes').remove();
        } else {
            $('.tabset.profile-tabset').append('<li id="horas-faltantes" class="pull-right"><span>Nips</span></li>');
        }
    });
  });