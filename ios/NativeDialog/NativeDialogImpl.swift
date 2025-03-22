//
//  NativeDialogImpl.swift
//  DialogExampleTurboModule
//
//  Created by Hardik Srivastava on 22/03/25.
//

import Foundation

@objcMembers class NativeDialogImpl: NSObject {
  func showDialog(_ text: String) {
    DispatchQueue.main.async {
      guard let keyWindow = UIApplication.shared.connectedScenes
        .compactMap({ $0 as? UIWindowScene })
        .first?.windows
        .first(where: { $0.isKeyWindow }) else { return }
      
      let alert = UIAlertController(title: "Alert", message: text, preferredStyle: .alert)
      alert.addAction(UIAlertAction(title: "OK", style: .default, handler: nil))
      keyWindow.rootViewController?.present(alert, animated: true, completion: nil)
    }
  }
}
