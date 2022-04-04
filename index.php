<?php
    include_once 'includes/config.php';
    include_once 'includes/templates/header.php';
    /* include_once 'includes/templates/navigation.php'; */
?>
<section class="main">
    <h2>My Personal Collection</h2>
    <h3>Videos, Music, and Oddities from Pulp Culture</h3>

    <div class="theList">
        <?php
            echo "Date Added - Link<br/>";
            for ($row = 0; $row < 66; $row++) {
                // echo "<ul>";
                echo date('m/d/Y', $videos[$row][1]) . "  - <a href=\"" . $videos[$row][0] . "\" target=\"blank\">" . $videos[$row][2] . "</a><br/>";
                // echo "</ul>";
            }
        ?> 
        
    </div>
</section>



<?php include_once './includes/templates/footer.php'; ?>