// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class AvatarNftEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save AvatarNftEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AvatarNftEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AvatarNftEntity", id.toString(), this);
    }
  }

  static load(id: string): AvatarNftEntity | null {
    return changetype<AvatarNftEntity | null>(store.get("AvatarNftEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriImage(): string | null {
    let value = this.get("uriImage");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriImage(value: string | null) {
    if (!value) {
      this.unset("uriImage");
    } else {
      this.set("uriImage", Value.fromString(<string>value));
    }
  }

  get uriFirstName(): string | null {
    let value = this.get("uriFirstName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriFirstName(value: string | null) {
    if (!value) {
      this.unset("uriFirstName");
    } else {
      this.set("uriFirstName", Value.fromString(<string>value));
    }
  }

  get uriLastName(): string | null {
    let value = this.get("uriLastName");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriLastName(value: string | null) {
    if (!value) {
      this.unset("uriLastName");
    } else {
      this.set("uriLastName", Value.fromString(<string>value));
    }
  }

  get reputations(): Array<string> {
    let value = this.get("reputations");
    return value!.toStringArray();
  }

  set reputations(value: Array<string>) {
    this.set("reputations", Value.fromStringArray(value));
  }
}

export class AvatarNftReputationEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("token", Value.fromString(""));
    this.set("domain", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save AvatarNftReputationEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type AvatarNftReputationEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("AvatarNftReputationEntity", id.toString(), this);
    }
  }

  static load(id: string): AvatarNftReputationEntity | null {
    return changetype<AvatarNftReputationEntity | null>(
      store.get("AvatarNftReputationEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get token(): string {
    let value = this.get("token");
    return value!.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get domain(): i32 {
    let value = this.get("domain");
    return value!.toI32();
  }

  set domain(value: i32) {
    this.set("domain", Value.fromI32(value));
  }

  get negativeRating(): BigInt | null {
    let value = this.get("negativeRating");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set negativeRating(value: BigInt | null) {
    if (!value) {
      this.unset("negativeRating");
    } else {
      this.set("negativeRating", Value.fromBigInt(<BigInt>value));
    }
  }

  get positiveRating(): BigInt | null {
    let value = this.get("positiveRating");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set positiveRating(value: BigInt | null) {
    if (!value) {
      this.unset("positiveRating");
    } else {
      this.set("positiveRating", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class JurisdictionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("rulesCount", Value.fromI32(0));
    this.set("casesCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save JurisdictionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionEntity | null {
    return changetype<JurisdictionEntity | null>(
      store.get("JurisdictionEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }

  get rulesCount(): i32 {
    let value = this.get("rulesCount");
    return value!.toI32();
  }

  set rulesCount(value: i32) {
    this.set("rulesCount", Value.fromI32(value));
  }

  get casesCount(): i32 {
    let value = this.get("casesCount");
    return value!.toI32();
  }

  set casesCount(value: i32) {
    this.set("casesCount", Value.fromI32(value));
  }
}

export class JurisdictionRoleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("roleId", Value.fromBigInt(BigInt.zero()));
    this.set("accounts", Value.fromBytesArray(new Array(0)));
    this.set("accountsCount", Value.fromI32(0));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionRoleEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionRoleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionRoleEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionRoleEntity | null {
    return changetype<JurisdictionRoleEntity | null>(
      store.get("JurisdictionRoleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get roleId(): BigInt {
    let value = this.get("roleId");
    return value!.toBigInt();
  }

  set roleId(value: BigInt) {
    this.set("roleId", Value.fromBigInt(value));
  }

  get accounts(): Array<Bytes> {
    let value = this.get("accounts");
    return value!.toBytesArray();
  }

  set accounts(value: Array<Bytes>) {
    this.set("accounts", Value.fromBytesArray(value));
  }

  get accountsCount(): i32 {
    let value = this.get("accountsCount");
    return value!.toI32();
  }

  set accountsCount(value: i32) {
    this.set("accountsCount", Value.fromI32(value));
  }
}

export class JurisdictionRuleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("about", Value.fromString(""));
    this.set("ruleId", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id != null,
      "Cannot save JurisdictionRuleEntity entity without an ID"
    );
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type JurisdictionRuleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("JurisdictionRuleEntity", id.toString(), this);
    }
  }

  static load(id: string): JurisdictionRuleEntity | null {
    return changetype<JurisdictionRuleEntity | null>(
      store.get("JurisdictionRuleEntity", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get about(): string {
    let value = this.get("about");
    return value!.toString();
  }

  set about(value: string) {
    this.set("about", Value.fromString(value));
  }

  get ruleId(): BigInt {
    let value = this.get("ruleId");
    return value!.toBigInt();
  }

  set ruleId(value: BigInt) {
    this.set("ruleId", Value.fromBigInt(value));
  }

  get affected(): string | null {
    let value = this.get("affected");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set affected(value: string | null) {
    if (!value) {
      this.unset("affected");
    } else {
      this.set("affected", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get negation(): boolean {
    let value = this.get("negation");
    return value!.toBoolean();
  }

  set negation(value: boolean) {
    this.set("negation", Value.fromBoolean(value));
  }

  get effectsEnvironmental(): i32 {
    let value = this.get("effectsEnvironmental");
    return value!.toI32();
  }

  set effectsEnvironmental(value: i32) {
    this.set("effectsEnvironmental", Value.fromI32(value));
  }

  get effectsPersonal(): i32 {
    let value = this.get("effectsPersonal");
    return value!.toI32();
  }

  set effectsPersonal(value: i32) {
    this.set("effectsPersonal", Value.fromI32(value));
  }

  get effectsSocial(): i32 {
    let value = this.get("effectsSocial");
    return value!.toI32();
  }

  set effectsSocial(value: i32) {
    this.set("effectsSocial", Value.fromI32(value));
  }

  get effectsProfessional(): i32 {
    let value = this.get("effectsProfessional");
    return value!.toI32();
  }

  set effectsProfessional(value: i32) {
    this.set("effectsProfessional", Value.fromI32(value));
  }

  get confirmationRuling(): string | null {
    let value = this.get("confirmationRuling");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set confirmationRuling(value: string | null) {
    if (!value) {
      this.unset("confirmationRuling");
    } else {
      this.set("confirmationRuling", Value.fromString(<string>value));
    }
  }

  get confirmationEvidence(): boolean {
    let value = this.get("confirmationEvidence");
    return value!.toBoolean();
  }

  set confirmationEvidence(value: boolean) {
    this.set("confirmationEvidence", Value.fromBoolean(value));
  }

  get confirmationWitness(): BigInt | null {
    let value = this.get("confirmationWitness");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set confirmationWitness(value: BigInt | null) {
    if (!value) {
      this.unset("confirmationWitness");
    } else {
      this.set("confirmationWitness", Value.fromBigInt(<BigInt>value));
    }
  }
}

export class ActionEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save ActionEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type ActionEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("ActionEntity", id.toString(), this);
    }
  }

  static load(id: string): ActionEntity | null {
    return changetype<ActionEntity | null>(store.get("ActionEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get subject(): string | null {
    let value = this.get("subject");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set subject(value: string | null) {
    if (!value) {
      this.unset("subject");
    } else {
      this.set("subject", Value.fromString(<string>value));
    }
  }

  get verb(): string | null {
    let value = this.get("verb");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set verb(value: string | null) {
    if (!value) {
      this.unset("verb");
    } else {
      this.set("verb", Value.fromString(<string>value));
    }
  }

  get object(): string | null {
    let value = this.get("object");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set object(value: string | null) {
    if (!value) {
      this.unset("object");
    } else {
      this.set("object", Value.fromString(<string>value));
    }
  }

  get tool(): string | null {
    let value = this.get("tool");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set tool(value: string | null) {
    if (!value) {
      this.unset("tool");
    } else {
      this.set("tool", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }
}

export class CaseEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("jurisdiction", Value.fromString(""));
    this.set("rules", Value.fromStringArray(new Array(0)));
    this.set("participantAccounts", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CaseEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseEntity | null {
    return changetype<CaseEntity | null>(store.get("CaseEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string | null {
    let value = this.get("name");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set name(value: string | null) {
    if (!value) {
      this.unset("name");
    } else {
      this.set("name", Value.fromString(<string>value));
    }
  }

  get createdDate(): BigInt | null {
    let value = this.get("createdDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdDate(value: BigInt | null) {
    if (!value) {
      this.unset("createdDate");
    } else {
      this.set("createdDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get jurisdiction(): string {
    let value = this.get("jurisdiction");
    return value!.toString();
  }

  set jurisdiction(value: string) {
    this.set("jurisdiction", Value.fromString(value));
  }

  get stage(): i32 {
    let value = this.get("stage");
    return value!.toI32();
  }

  set stage(value: i32) {
    this.set("stage", Value.fromI32(value));
  }

  get verdictAuthor(): Bytes | null {
    let value = this.get("verdictAuthor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set verdictAuthor(value: Bytes | null) {
    if (!value) {
      this.unset("verdictAuthor");
    } else {
      this.set("verdictAuthor", Value.fromBytes(<Bytes>value));
    }
  }

  get verdictConfirmedRules(): Array<string> | null {
    let value = this.get("verdictConfirmedRules");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set verdictConfirmedRules(value: Array<string> | null) {
    if (!value) {
      this.unset("verdictConfirmedRules");
    } else {
      this.set(
        "verdictConfirmedRules",
        Value.fromStringArray(<Array<string>>value)
      );
    }
  }

  get verdictUri(): string | null {
    let value = this.get("verdictUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set verdictUri(value: string | null) {
    if (!value) {
      this.unset("verdictUri");
    } else {
      this.set("verdictUri", Value.fromString(<string>value));
    }
  }

  get verdictUriData(): Bytes | null {
    let value = this.get("verdictUriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set verdictUriData(value: Bytes | null) {
    if (!value) {
      this.unset("verdictUriData");
    } else {
      this.set("verdictUriData", Value.fromBytes(<Bytes>value));
    }
  }

  get cancellationAuthor(): Bytes | null {
    let value = this.get("cancellationAuthor");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cancellationAuthor(value: Bytes | null) {
    if (!value) {
      this.unset("cancellationAuthor");
    } else {
      this.set("cancellationAuthor", Value.fromBytes(<Bytes>value));
    }
  }

  get cancellationUri(): string | null {
    let value = this.get("cancellationUri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set cancellationUri(value: string | null) {
    if (!value) {
      this.unset("cancellationUri");
    } else {
      this.set("cancellationUri", Value.fromString(<string>value));
    }
  }

  get cancellationUriData(): Bytes | null {
    let value = this.get("cancellationUriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set cancellationUriData(value: Bytes | null) {
    if (!value) {
      this.unset("cancellationUriData");
    } else {
      this.set("cancellationUriData", Value.fromBytes(<Bytes>value));
    }
  }

  get rules(): Array<string> {
    let value = this.get("rules");
    return value!.toStringArray();
  }

  set rules(value: Array<string>) {
    this.set("rules", Value.fromStringArray(value));
  }

  get roles(): Array<string> {
    let value = this.get("roles");
    return value!.toStringArray();
  }

  set roles(value: Array<string>) {
    this.set("roles", Value.fromStringArray(value));
  }

  get posts(): Array<string> {
    let value = this.get("posts");
    return value!.toStringArray();
  }

  set posts(value: Array<string>) {
    this.set("posts", Value.fromStringArray(value));
  }

  get participantAccounts(): Array<Bytes> {
    let value = this.get("participantAccounts");
    return value!.toBytesArray();
  }

  set participantAccounts(value: Array<Bytes>) {
    this.set("participantAccounts", Value.fromBytesArray(value));
  }
}

export class CaseRoleEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caseEntity", Value.fromString(""));
    this.set("accounts", Value.fromBytesArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CaseRoleEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseRoleEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseRoleEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseRoleEntity | null {
    return changetype<CaseRoleEntity | null>(store.get("CaseRoleEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caseEntity(): string {
    let value = this.get("caseEntity");
    return value!.toString();
  }

  set caseEntity(value: string) {
    this.set("caseEntity", Value.fromString(value));
  }

  get roleId(): BigInt | null {
    let value = this.get("roleId");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set roleId(value: BigInt | null) {
    if (!value) {
      this.unset("roleId");
    } else {
      this.set("roleId", Value.fromBigInt(<BigInt>value));
    }
  }

  get accounts(): Array<Bytes> {
    let value = this.get("accounts");
    return value!.toBytesArray();
  }

  set accounts(value: Array<Bytes>) {
    this.set("accounts", Value.fromBytesArray(value));
  }
}

export class CasePostEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("author", Value.fromBytes(Bytes.empty()));
    this.set("caseEntity", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CasePostEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CasePostEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CasePostEntity", id.toString(), this);
    }
  }

  static load(id: string): CasePostEntity | null {
    return changetype<CasePostEntity | null>(store.get("CasePostEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get author(): Bytes {
    let value = this.get("author");
    return value!.toBytes();
  }

  set author(value: Bytes) {
    this.set("author", Value.fromBytes(value));
  }

  get createdDate(): BigInt | null {
    let value = this.get("createdDate");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set createdDate(value: BigInt | null) {
    if (!value) {
      this.unset("createdDate");
    } else {
      this.set("createdDate", Value.fromBigInt(<BigInt>value));
    }
  }

  get caseEntity(): string {
    let value = this.get("caseEntity");
    return value!.toString();
  }

  set caseEntity(value: string) {
    this.set("caseEntity", Value.fromString(value));
  }

  get entityRole(): string | null {
    let value = this.get("entityRole");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set entityRole(value: string | null) {
    if (!value) {
      this.unset("entityRole");
    } else {
      this.set("entityRole", Value.fromString(<string>value));
    }
  }

  get uri(): string | null {
    let value = this.get("uri");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uri(value: string | null) {
    if (!value) {
      this.unset("uri");
    } else {
      this.set("uri", Value.fromString(<string>value));
    }
  }

  get uriData(): Bytes | null {
    let value = this.get("uriData");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set uriData(value: Bytes | null) {
    if (!value) {
      this.unset("uriData");
    } else {
      this.set("uriData", Value.fromBytes(<Bytes>value));
    }
  }

  get uriType(): string | null {
    let value = this.get("uriType");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set uriType(value: string | null) {
    if (!value) {
      this.unset("uriType");
    } else {
      this.set("uriType", Value.fromString(<string>value));
    }
  }
}

export class CaseEventEntity extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("caseEntity", Value.fromString(""));
    this.set("createdDate", Value.fromBigInt(BigInt.zero()));
    this.set("type", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save CaseEventEntity entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type CaseEventEntity must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("CaseEventEntity", id.toString(), this);
    }
  }

  static load(id: string): CaseEventEntity | null {
    return changetype<CaseEventEntity | null>(store.get("CaseEventEntity", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get caseEntity(): string {
    let value = this.get("caseEntity");
    return value!.toString();
  }

  set caseEntity(value: string) {
    this.set("caseEntity", Value.fromString(value));
  }

  get createdDate(): BigInt {
    let value = this.get("createdDate");
    return value!.toBigInt();
  }

  set createdDate(value: BigInt) {
    this.set("createdDate", Value.fromBigInt(value));
  }

  get type(): string {
    let value = this.get("type");
    return value!.toString();
  }

  set type(value: string) {
    this.set("type", Value.fromString(value));
  }

  get data(): Bytes | null {
    let value = this.get("data");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set data(value: Bytes | null) {
    if (!value) {
      this.unset("data");
    } else {
      this.set("data", Value.fromBytes(<Bytes>value));
    }
  }
}
