Add this to the navbar_items section in the config/voyager.php

'navbar_items' => [
            //...
            'Take the website maintenance mode' => [
                'route'        => 'maintenance-mode/'.(app()->isDownForMaintenance() ? 'up' : 'down'),
                'icon_class'   => 'voyager-lock',
            ]
        ]