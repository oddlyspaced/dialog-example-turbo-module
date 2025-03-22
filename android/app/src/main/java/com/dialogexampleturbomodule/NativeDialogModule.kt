package com.dialogexampleturbomodule

import android.app.AlertDialog
import com.facebook.react.bridge.ReactApplicationContext
import com.nativedialog.NativeDialogSpec


class NativeDialogModule(reactContext: ReactApplicationContext) : NativeDialogSpec(reactContext) {
    companion object {
        const val NAME = "NativeDialog"
    }

    override fun getName() = NAME

    override fun showDialog(text: String?) {
        currentActivity?.runOnUiThread {
            val builder: AlertDialog.Builder = AlertDialog.Builder(currentActivity)
            builder
                .setMessage(text)
                .setTitle("Alert")
                .setPositiveButton("Positive") { dialog, which ->
                    // Do something.
                }
                .setNegativeButton("Negative") { dialog, which ->
                    // Do something else.
                }
            val dialog: AlertDialog = builder.create()
            dialog.show()
        }

    }
}