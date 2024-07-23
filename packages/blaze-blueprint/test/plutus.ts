// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { type Script } from "@blaze-cardano/core";
import {
  applyParamsToScript,
  cborToScript,
  ScriptType,
} from "@blaze-cardano/uplc";

export interface AlwaysTrueSpend {
  new (_param1: bigint, _param2: string): Script;
  _datum: Array<bigint>;
  _redeemer: bigint;
}

export const AlwaysTrueSpend = Object.assign(
  function (_param1: bigint, _param2: string) {
    return cborToScript(
      applyParamsToScript(
        "5848010000323232322322322322322533300a4a229309b2b1bad0013233001001375800444a6660120022930991980180198060011bad300a001375c0026eb40055cd2ab9f5742ae881",
        [_param1, _param2],
        {
          dataType: "list",
          items: [{ dataType: "integer" }, { dataType: "bytes" }],
        } as any
      ),
      ScriptType.PlutusV2
    );
  },
  { _datum: { dataType: "list", items: { dataType: "integer" } } },
  { _redeemer: { dataType: "integer" } }
) as unknown as AlwaysTrueSpend;
