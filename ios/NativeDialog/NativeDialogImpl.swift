//
//  NativeDialogImpl.swift
//  DialogExampleTurboModule
//
//  Created by Hardik Srivastava on 22/03/25.
//

import Foundation

@objcMembers class NativeDialogImpl: NSObject {
  func showDialog(_ text: String, resolve: @escaping RCTPromiseResolveBlock, reject: @escaping RCTPromiseRejectBlock) {
    DispatchQueue.main.async {
      guard let keyWindow = UIApplication.shared.connectedScenes
        .compactMap({ $0 as? UIWindowScene })
        .first?.windows
        .first(where: { $0.isKeyWindow }) else { return }
      
      let alert = UIAlertController(title: "Alert", message: text, preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: "OK", style: .default, handler: { _ in
              resolve("done")
            }))
            alert.addAction(UIAlertAction(title: "Reject", style: .destructive, handler: { _ in
              reject("REJECTED", "User rejected the dialog", nil)
            }))
            keyWindow.rootViewController?.present(alert, animated: true, completion: nil)
    }
  }
}
