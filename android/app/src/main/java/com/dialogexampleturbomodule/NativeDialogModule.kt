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
    override fun showDialog(message: String?, positiveLabel: String?, negativeLabel: String?, dialogResultPromise: Promise?) {
        currentActivity?.runOnUiThread {
            val builder: AlertDialog.Builder = AlertDialog.Builder(currentActivity)
            builder
                .setMessage(message)
                .setTitle("Alert!")
                .setPositiveButton(positiveLabel) { _, _ ->
                    dialogResultPromise?.resolve("Tapped on Positive!")
                }
                .setNegativeButton(negativeLabel) { _, _ ->
                    dialogResultPromise?.reject("ERR_NATIVE_DIALOG_REJECTED", "Tapped on Negative!")
                }
            val dialog: AlertDialog = builder.create()
            dialog.show()
        }
    }
}