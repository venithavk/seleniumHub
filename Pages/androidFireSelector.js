class Android {
  
    get isTitle(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.widget.RelativeLayout/android.view.ViewGroup/android.widget.TextView[1]');
    }

    get movie(){
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Navigation menu"]/android.widget.FrameLayout[4]/android.view.ViewGroup/android.widget.ImageView');
    }
    
    get moreInfo(){
        return $('#button_home_more_info');
    }
    
    get news(){
        return $('//androidx.recyclerview.widget.RecyclerView[@content-desc="Navigation menu"]/android.widget.FrameLayout[6]/android.view.ViewGroup/android.widget.ImageView');
    }
    
    get isLive(){
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.FrameLayout[1]/android.view.ViewGroup/androidx.recyclerview.widget.RecyclerView/android.widget.LinearLayout[1]/android.widget.LinearLayout[2]/androidx.recyclerview.widget.RecyclerView/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[1]');
    }
}
    
module.exports = new Android();