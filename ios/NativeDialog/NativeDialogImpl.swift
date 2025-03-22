//
//  NativeDialogImpl.swift
//  DialogExampleTurboModule
//
//  Created by Hardik Srivastava on 22/03/25.
//

import Foundation

@objcMembers class NativeDialogImpl: NSObject {
  func showDialog(_ message: String, positiveLabel: String, negativeLabel: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      guard let keyWindow = UIApplication.shared.connectedScenes
        .compactMap({ $0 as? UIWindowScene })
        .first?.windows
        .first(where: { $0.isKeyWindow }) else { return }
      
      let alert = UIAlertController(title: "Alert!", message: message, preferredStyle: .alert)
      alert.addAction(UIAlertAction(title: positiveLabel, style: .default, handler: { _ in
        resolve("(iOS) Tapped on Postive!")
      }))
      alert.addAction(UIAlertAction(title: negativeLabel, style: .destructive, handler: { _ in
        reject("ERR_IOS_NATIVE_DIALOG_REJECTED", "(iOS) Tapped on Negative!", nil)
      }))
      keyWindow.rootViewController?.present(alert, animated: true, completion: nil)
    }
  }
}
