package com.dialogexampleturbomodule

import android.app.AlertDialog
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.nativedialog.NativeDialogSpec


class NativeDialogModule(reactContext: ReactApplicationContext) : NativeDialogSpec(reactContext) {
    companion object {
        const val NAME = "NativeDialog"
    }

    override fun getName() = NAME

    override fun showDialog(text: String?, dialogResultPromise: Promise?) {
        currentActivity?.runOnUiThread {
            val builder: AlertDialog.Builder = AlertDialog.Builder(currentActivity)
            builder
                .setMessage(text)
                .setTitle("Alert")
                .setPositiveButton("Positive") { dialog, which ->
                    dialogResultPromise?.resolve("YES")
                }
                .setNegativeButton("Negative") { dialog, which ->
                    dialogResultPromise?.resolve("NO")
                }
            val dialog: AlertDialog = builder.create()
            dialog.show()
        }

    }
}