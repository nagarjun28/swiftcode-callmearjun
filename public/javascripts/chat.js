var app = angular.module('chatApp', ['ngMaterial']);

app.controller('chatController', function ($scope, $sce) {

$scope.messages=[
    {'sender':'USER',
      'text':'hi',
      'time':'10:01AM'
    },
    {'sender':'BOT',
      'text':'hi how can i help you',
      'time':'10:01AM'
    },
    {'sender':'USER',
      'text':'give me news about north korea',
      'time':'10:01AM'
    },
    {'sender':'BOT',
      'text':'invalid',
      'time':'10:01AM'
    }

];

});
