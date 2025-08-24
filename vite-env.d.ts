/// <reference types="vite/client" />

// ImportMeta インターフェースを拡張して viteRsc を追加
interface ImportMeta {
  readonly env: ImportMetaEnv
  readonly viteRsc: {
    /**
     * 他の環境（ssr/rsc）からモジュールをロード
     * @param environmentName - ターゲット環境 ('ssr' | 'rsc')
     * @param entryName - rollupOptions.input からのエントリー名
     */
    loadModule<T = any>(environmentName: 'ssr' | 'rsc', entryName: string): Promise<T>
    
    /**
     * サーバーコンポーネント用の CSS アセットを注入
     * @param importer - CSS を収集する対象モジュール ID（オプション）
     */
    loadCss(importer?: string): React.ReactNode
    
    /**
     * SSR 用のブートストラップスクリプトコンテンツをロード
     * @param entryName - クライアント環境のエントリー名
     */
    loadBootstrapScriptContent(entryName: string): Promise<string>
    
    /**
     * SSR モジュールを特定的にロード（便利メソッド）
     */
    loadSsrModule<T = any>(entryName?: string): Promise<T>
  }
  
  // HMR サポート（RSC 特有のイベントを含む）
  readonly hot?: {
    on(event: 'rsc:update', callback: () => void | Promise<void>): void
  } & import("vite/types/hot").ViteHotContext
}

// カスタム環境変数
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  readonly BASE_URL: string
  readonly MODE: string
  readonly DEV: boolean
  readonly PROD: boolean
  readonly SSR: boolean
}
