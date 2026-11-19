package in.ac.nitjsr.sece;

import android.os.Bundle;
import android.view.View;
import android.view.WindowManager;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        // Make the status bar use the app's dark theme color
        getWindow().setStatusBarColor(0xFF110c08); // #110c08
        getWindow().setNavigationBarColor(0xFF0a0705); // #0a0705

        // Keep screen on while app is active (optional — remove if not needed)
        // getWindow().addFlags(WindowManager.LayoutParams.FLAG_KEEP_SCREEN_ON);

        // Clear the light status bar flag so icons appear white on dark background
        View decorView = getWindow().getDecorView();
        int flags = decorView.getSystemUiVisibility();
        flags &= ~View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;
        decorView.setSystemUiVisibility(flags);
    }
}
